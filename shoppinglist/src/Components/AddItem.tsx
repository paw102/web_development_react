import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Item } from "../App2";

type AddItemProps = {
  addItem: (item: Item) => void;
}

function AddItem(props: AddItemProps){
  const [open, setOpen] = useState(false);
  // item 과 관련된 상태 정의
  const [item, setItem] = useState<Item>({
    product:'',
    amount: '',
  });

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  // addItem 함수를 호출하고 item 상태를 전달
  const addItem = () => {
    props.addItem(item);  // -> 추가하고 나서 TextField 내에 있는 값들을 지울거임
    // Js에서 수업함. 텍스트 필드를 지우고 모달 대화 상자를 닫음 
    setItem({
      product:'',
      amount:'',
    });
    handleClose();
  }

  return(
    <>
    <br />
      <Button variant="outlined" onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>

          <TextField value={item.product} margin="dense"
            onChange={e => setItem({...item, product: e.target.value})}
            label="Product" fullWidth/>

          <TextField value={item.amount} margin="dense"
            onChange={e => setItem({...item, amount: e.target.value})}
            label="Amount" fullWidth/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 

export default AddItem;