const Details = props => {
  const { status, premierred, network } = props;
  return (
    <div>
      <p>Status:{status}</p>
      <p>
        Premierred:{premierred} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
