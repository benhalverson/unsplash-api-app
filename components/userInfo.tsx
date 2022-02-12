const UserInfo = ({ name, bio, portfolioURL, social }: any) => {
  return (
    <div className='inline-block'>
      <div>Name: {name} name</div>
      <div>Bio: {bio}</div>
      <div>Portfolio: {portfolioURL}</div>
      <div>Instagram: {social?.instagramUsername}</div>
      <div>Twitter: {social?.twitterUsername}</div>
    </div>
  );
};

export default UserInfo;

interface Props {
  name: string;
  bio: string;
  portfolioURL: string;
  social: {
    instagramUsername: string;
    twitterUsername: string;
  }
}