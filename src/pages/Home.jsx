import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/country-service';

const Home = () => {
  const [countries, setCoutries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCoutries = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCoutries(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoutries();
  }, []);

  return (
    <Section>
      <Container>
        {error && (
          <Heading>Sorry, something went wrong. Server says {error}</Heading>
        )}
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
