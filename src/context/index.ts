import RxjsStore, { RxjsStoreReducerParams } from '../utils/rxjsStore'
import { tabType, TableDataType } from '../types'

// * ------------------------------------------------------------------------------- init

interface StateType {
  tab?: tabType
  table?: TableDataType
  modal?: tabType
}

const initState: StateType = {
  tab: '首页'
}

// * ------------------------------------------------------------------------------- reduc

interface ReducersType<S> extends RxjsStoreReducerParams<S> {
  toggleTab: (state: S, tabType: tabType) => S
  setTableData: (state: S, data: TableDataType) => S
  openModal: (state: S, modalType?: tabType) => S
  closeModal: (state: S) => S
}

const reducers: ReducersType<StateType> = {
  toggleTab(state, tabType) {
    return { ...state, tab: tabType }
  },
  setTableData(state, data) {
    return { ...state, table: data }
  },
  openModal(state, modalType) {
    return { ...state, modal: modalType }
  },
  closeModal(state) {
    return { ...state, modal: undefined }
  }
}

export const Context = new RxjsStore<StateType, ReducersType<StateType>>(
  initState,
  reducers
)
