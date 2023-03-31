import CharacterCard from '@/components/cards/CharacterCard';
import SearchForm from '@/components/SearchForm';
import { Character } from '@/types/Character';
import { Filter } from '@/types/Filter';
import { queryFilter } from '@/utils/filters';
import { LinearProgress } from '@mui/joy';
import { Box, Grid } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import { APIResult } from '@/types/APIResult';
import { APIError } from '@/types/APIError';


const HomePage: FC<any> = () => {
  const [characters, setCharacters] = useState<APIResult>({
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null
    },
    results: []
  });
  
  const [valueSearch, setValueSearch] = useState<Filter>({
    gender: undefined,
    name: undefined,
    species: undefined,
    status: undefined
  })
  const [pageSelection, setPageSelection] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false)




  async function fetchCharactersByPage(page: number) {
    const hostname = window.location.origin;



    const res = await fetch(`${hostname}/api/character/${page}${queryFilter({
      gender: valueSearch.gender,
      name: valueSearch.name,
      species: valueSearch.species,
      status: valueSearch.status
    })}`)

    const data: APIResult | APIError = await res.json()
    if (typeof data === "object" && "info" in data) {
      setCharacters(data)

    } else if (typeof data === "object" && "status" in data) {
      setCharacters({
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: []
      })

    }
    setIsLoading(false)

  }




  function handleChangePage(page: number) {
    setPageSelection(page);
  }




  useMemo(() => {
    setIsLoading(true)
    fetchCharactersByPage(pageSelection);
  }, [valueSearch, pageSelection]);



  useEffect(() => {
    (async() => {
      const res = await fetch(`${window.location.origin}/api/character/1`)
      const getData: APIResult = await res.json()
      setCharacters(getData)
    })()
  }, [])

  return (
    <Box
      sx={{
        alignContent: "center", alignItems: 'center',
        justifyContent: 'center'
      }}>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <Box sx={{
        width: "100%",
        height: { xs: 500, sm: 500 },
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderColor: "#FFF",
        borderWidth: 15,
        overflow: 'hidden',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundImage: "url(/hero_bg.png)"
      }}>
        <SearchForm
          onChangePage={handleChangePage}
          pages={characters.info.pages}
          onSearch={function (filter: Filter): void {
            setValueSearch(filter)
          }}
        />
      </Box>

      <Grid container spacing={2} columns={{ xs: 1, sm: 3 }} sx={{ p: 5 }} >
        {characters.results.map((character: Character, index: number) => {
          return (
            <Grid item xs={1} key={index}>
              <CharacterCard {...character} key={index + pageSelection} />
            </Grid>
          )
        })}
      </Grid>
    </Box >
  );
};





export default HomePage;
