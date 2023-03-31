/* eslint-disable @next/next/no-img-element */

import { Character } from "@/types/Character";
import { translateAtt } from "@/utils/translated";
import { CardCover, CardContent, Typography } from "@mui/joy";


interface CardFlip{
    card:Character;
    flip:()=>void;
}

export default function CharacterCardVerse(props: CardFlip) {

    const card = props.card

    return (
        <CardContent sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
        }}
        >
            <CardCover>
                <img
                    src={card.image}
                    loading="lazy"
                    alt={`card ${card.id}`}
                    width={150}
                    height={50}
                    style={{transform: "rotateY(180deg)"}}
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    backdropFilter: "blur(5px)"
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', gap: 1, m: 3 }}>
                    <Typography level="h2" fontSize="lg" textColor="#fff" mb={1} mr={2}>
                        {card.name}
                    </Typography>
                    
                <Typography
                    textColor="neutral.300"
                >
                    Gênero: {translateAtt(card.gender)}
                </Typography>
            </CardContent>
        </CardContent>
    )
}