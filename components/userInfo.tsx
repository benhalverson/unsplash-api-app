const UserInfo = ({ name, bio, portfolioURL, twitterUsername}: Props) => {
  console.log(portfolioURL)
  const info = (data: string) => {
    return data ? data : "no info";
  }
  return (
    <div className='inline-block'>
      <div>Name: {info(name)} </div>
      <div>Bio: {info(bio)}</div>
      <div>Portfolio: {info(portfolioURL)}</div>
      <div>Twitter: {info(twitterUsername)}</div>
    </div>
  );
};

export default UserInfo;

interface Props {
  name: string;
  bio: string;
  portfolioURL: string;
  twitterUsername: string;
}