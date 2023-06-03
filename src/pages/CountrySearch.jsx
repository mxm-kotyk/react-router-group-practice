import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';
import { useSearchParams } from 'react-router-dom';

const CountrySearch = () => {
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchCoutriesReg = async () => {
      setIsLoading(true);
      try {
        const data = await fetchByRegion(query);
        setCountrys(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoutriesReg();
  }, [query]);

  return (
    <Section>
      <Container>
        {error && (
          <Heading>Sorry, something went wrong. Server says {error}</Heading>
        )}
        <SearchForm setQury={setSearchParams} />
        <CountryList countries={countrys} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default CountrySearch;
