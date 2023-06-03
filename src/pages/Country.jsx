import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

const Country = () => {
  const location = useLocation();
  const { countryId } = useParams();
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  console.log(location);

  useEffect(() => {
    const fetchCountryData = async () => {
      setIsloading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchCountryData();
  }, [countryId]);

  return (
    <Section>
      <Link to={location?.state ?? '/'}>back</Link>

      <Container>
        {error && <h1>Sorry, something went wrong. Server says {error}</h1>}
        <CountryInfo country={country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Country;
