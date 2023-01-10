import { useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './global-header-search.module.less';

const { Search } = Input;

interface IState {
  show: boolean;
  value: string;
}

const GlobalHeaderSearch = () => {

  const initialState: IState = {
    show: false,
    value: '',
  }

  const [state, setState] = useState(initialState);

  const showInput = () => {
    setState({
      ...state,
      show: true,
    })
  }

  const hideInput = () => {
    if (state.value) return;
    setState({
      ...state,
      show: false,
    })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/(^\s*)|(\s*$)/g, ""); // 去除两端空格
    setState({
      ...state,
      value
    })
  }

  const onSearch = () => {
    if(!state.value) {
      return;
    }
    // value = value.replace(/(^\s*)|(\s*$)/g, ""); // 去除两端空格
    const keyword = encodeURIComponent(state.value);
    // this.props.dispatch(routerRedux.push(`/search?type=content&q=${keyword}`));
  }

  const { show } = state;

    return(
      <div className={styles.search}>
        {
          show ?
            <Input
              autoFocus
              placeholder="搜索"
              suffix={<SearchOutlined onClick={onSearch} />}
              onChange={onChange}
              onBlur={hideInput}
            />
            :
            <span className={styles.icon}>
              <SearchOutlined onClick={showInput} />
            </span>
        }
      </div>
    )
};

export default GlobalHeaderSearch;
