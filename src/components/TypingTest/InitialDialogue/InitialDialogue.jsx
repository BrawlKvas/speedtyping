import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React, { useState } from 'react'

const InitialDialogue = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Тест на скорость печати</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Набери небольшой текс. Проверь, сколько знаков в минуту ты печатаешь на английском языке.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" target="_blank" href="https://ru.wikipedia.org/wiki/Слепой_метод_печати">
            Узнать как печатать быстрее
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Начать печатать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InitialDialogue
