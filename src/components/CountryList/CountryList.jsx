import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation()

  return (
    <>
      <Grid>
        {countries.map(({ id, flag, country }) => (
          <GridItem key={id}>
            <Link to={`/countrys/${id}`} state={location}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
