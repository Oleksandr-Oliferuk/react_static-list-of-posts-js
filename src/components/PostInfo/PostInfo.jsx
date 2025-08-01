import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { userName, userEmail, postTitle, postBody, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postTitle}</h3>

        <p>
          {' Posted by  '}

          <UserInfo name={userName} mail={userEmail} />
        </p>
      </div>

      <p className="PostInfo__body">{postBody}</p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
