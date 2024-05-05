import { configureStore } from '@reduxjs/toolkit'
import TriggerSlice from './slicers/TriggerSlice';

export const store = configureStore({
  reducer: {
    triggers: TriggerSlice,
  },
})