import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MerchantList } from '@/types/merchantList';

const initialState: MerchantList = {
  merchantsData: [],
};

const merchantSlice = createSlice({
  name: 'merchant',
  initialState,
  reducers: {
    setMerchantsData(state, action: PayloadAction<Array<any>>) {
      state.merchantsData = action.payload;
    },
    clearMerchantsData(state) {
      state.merchantsData = [];
    },
  },
});

export const { setMerchantsData, clearMerchantsData } = merchantSlice.actions;

export default merchantSlice.reducer;
