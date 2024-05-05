import React, { useEffect } from 'react';
import "./App.css";
import DataList from './components/data/DataList';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setToast, setToastMessage } from './redux/slicers/TriggerSlice';
function App() {
  const toaster = useSelector((state) => state.triggers.toast);
  const dispatch = useDispatch();
  const toastMessage = useSelector((state) => state.triggers.toastMessage);
  useEffect(() => {
    if (toaster && toastMessage) {
      const type = toastMessage[0];
      const message = toastMessage[1];
      toast[type](message);
    }
    dispatch(setToast(false));
    dispatch(setToastMessage(null));
  }, [toaster, toastMessage]);
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        className="Custom-toaster"
      />
      <DataList />
    </div>
  );
}

export default App;
