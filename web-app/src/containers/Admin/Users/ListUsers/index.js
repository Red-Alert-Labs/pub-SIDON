import { connect } from 'react-redux';
import ListUsers from './ListUsers';
import { getUserList } from '../../../../store/listUser';

const mapStateToProps = userListStore => userListStore;
const mapDispatchToProps = {
  userList: () => getUserList(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
