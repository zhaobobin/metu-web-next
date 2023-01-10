import { useState } from 'react';
import { Avatar, Button, Menu, Dropdown } from 'antd';
import GlobalHeaderSearch from './global-header-search';
import styles from './global-header-sign.module.less';

const GlobalHeaderSign = () => {
  const [state, setState] = useState();

  // 切换登录注册modal状态
  const setUserModal = (value: boolean, key: string) => {
    // dispatch({
    //   type: 'global/changeSignModal',
    //   payload: {
    //     signModalVisible: value,
    //     signTabKey: key,
    //   }
    // });
  };

  // 退出登录
  const logout = () => {
    // Confirm({
    //   title: '退出登录?',
    //   callback: (res) => {
    //     if(res === 1) {
    //       dispatch({
    //         type: 'global/logout',
    //       });
    //     }
    //   }
    // });
  };

  return (
    <div className={styles.userAction}>
      <ul>
        <li>
          <GlobalHeaderSearch />
        </li>
        <li>
          <Button
            className={styles.userBtn}
            onClick={() => setUserModal(true, '1')}
          >
            登录
          </Button>
        </li>

        <li>
          <Button
            className={styles.userBtn}
            type="primary"
            onClick={() => setUserModal(true, '2')}
          >
            注册
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default GlobalHeaderSign;
