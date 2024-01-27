export default function AppTitle(props) {
  const {
    title = 'Box Office ',
    subtitle = 'Search your favourite movie or actor/actress',
  } = { props };
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
