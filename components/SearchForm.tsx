/* eslint-disable @next/next/no-img-element */
import { Box, Button, FormControl, Select, Typography, Option, Input, IconButton } from "@mui/joy";
import {  useMemo, useState } from "react";
import { Pagination, Grid } from "@mui/material";
import { Filter } from "@/types/Filter";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';




interface Search {
    onSearch: (filter: Filter) => void
    onChangePage: (page: number) => void
    pages: number
}

export default function SearchForm({ onSearch, onChangePage, pages }: Search) {
    const [valueSearch, setValueSearch] = useState<Filter>({
        gender: undefined,
        name: undefined,
        species: undefined,
        status: undefined
      })
    const [valuePage, setValuePage] = useState(1)

    function removeFilters(prop: keyof Filter) {
        setValueSearch({ ...valueSearch, [prop]: "" });
    };
    function removeAllFilters() {
        setValueSearch({
            gender: "",
            name: "",
            species: "",
            status: ""
        });
    };


    


    useMemo(() => {
        onSearch(valueSearch)

        onChangePage(valuePage)

    }, [valuePage,valueSearch])

    return (
        <FormControl sx={{ width: { xs: "85%", sm: "70%" }, maxWidth: 600, textAlign: "center", mb: 35, pt: 8 }}>

            <img alt={"Rick-And-Morty-Logo"} src={"/Rick-And-Morty-Logo.png"} width={"100%"} height={"auto"} />
            <Box sx={{ position: "absolute", top: "75%", width: "100%" }}>
                <Typography sx={{ textAlign: "center", color: "#FFF" }} fontSize={30} >Wiki</Typography>
                <Grid container spacing={2} columns={2} sx={{ width: "100%" }}>
                    <Grid item xs={2}>
                        <Input
                            endDecorator={
                                <IconButton color="danger" variant="plain" onClick={() => removeFilters("name")}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            }
                            value={valueSearch.name}
                            onChange={(e) => setValueSearch({ ...valueSearch, name: e.target.value })}
                            placeholder="Buscar por nome" variant="soft"
                        />
                    </Grid>
                    <Grid item xs={1} display={"flex"}>
                        <IconButton color="danger" variant="plain" onClick={() => removeFilters("status")}>
                            <RemoveCircleIcon />
                        </IconButton>

                        <Select
                            sx={{ flex: 1 }}
                            value={valueSearch.status}
                            placeholder={"Status"}
                            onChange={(_, value) => {
                                setValueSearch({ ...valueSearch, status: `${value}` })
                            }}>
                            <Option value="Dead">Morto</Option>
                            <Option value="Alive">Vivo</Option>
                            <Option value="unknown">Desconhecido</Option>
                        </Select>
                    </Grid>
                    <Grid item xs={1} display={"flex"}>
                        <IconButton color="danger" variant="plain" onClick={() => removeFilters("species")}>
                            <RemoveCircleIcon />
                        </IconButton>
                        <Select
                            sx={{ flex: 1 }}
                            value={valueSearch.species}
                            placeholder={"Espécie"}
                            onChange={(_, value) => {
                                setValueSearch({ ...valueSearch, species: `${value}` })
                            }}>
                            <Option value="Human">Humano</Option>
                            <Option value="Alien">Alien</Option>
                            <Option value="Mythological Creature">Criatura</Option>
                            <Option value="Animal">Animal</Option>
                        </Select>
                    </Grid>

                    <Grid item xs={1} display={"flex"}>
                        <IconButton color="danger" variant="plain" onClick={() => removeFilters("gender")}>
                            <RemoveCircleIcon />
                        </IconButton>
                        <Select
                            sx={{ flex: 1 }}
                            value={valueSearch.gender}
                            placeholder={"Gênero"}
                            onChange={(_, value) => {
                                setValueSearch({ ...valueSearch, gender: `${value}` })
                            }}>
                            <Option value="Female">Feminino</Option>
                            <Option value="Male">Masculino</Option>
                            <Option value="Genderless">Indefinido</Option>
                            <Option value="unknown">Desconhecido</Option>
                        </Select>
                    </Grid>
                    <Grid item xs={1}>
                        <Button
                            fullWidth
                            startDecorator={<RemoveCircleIcon />
                            } size="md"
                            variant={"solid"}
                            color="danger"
                            onClick={removeAllFilters}>
                            Remover Filtros
                        </Button>
                    </Grid>
                </Grid>
                <Pagination
                    count={pages}
                    size={"large"}
                    shape="rounded"
                    color="primary"
                    sx={{
                        width: { xs: "100%", sm: 590 },
                        backdropFilter: "blur(10px)",
                        mt: 1,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        borderRadius: { xs: 2, sm: 5 }
                    }}
                    onChange={(_, value) => setValuePage(value as number)}
                />
            </Box>
        </FormControl >
    )
}