import './UserInfo.scss';

export const UserInfo = ({ name, mail }) => {
  return (
    <a className="UserInfo" href={`mailto:${mail}`}>
      {name}
    </a>
  );
};
