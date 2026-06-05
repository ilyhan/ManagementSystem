import '@/common/components/userInfo/style.scss';
import defaultAvatar from '/public/images/avatar.png';

interface IUserInfoProps {
  avatar?: string;
  name: string;
}

const UserInfo = ({ avatar, name }: IUserInfoProps) => {
  return (
    <div className="user-info">
      <img src={avatar ? avatar : defaultAvatar} className="user-info__avatar" alt={name} />

      <p className="user-info__name">{name}</p>
    </div>
  );
};

export default UserInfo;
