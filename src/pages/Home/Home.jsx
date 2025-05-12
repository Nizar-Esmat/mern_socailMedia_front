import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../../components/Topbar/Topbar';
import SideBar from '../../components/sidebar/SideBar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

import './home.css'
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContenter">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
