/* eslint-disable @next/next/no-img-element */
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Character } from '@/types/Character';
import { Box, Chip, } from '@mui/joy';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import { Fragment, useState } from 'react';
import CharacterCardVerse from './CharacterCardVerse';
import Favorite from '@mui/icons-material/Favorite';
import { CardActions, IconButton } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import PublicIcon from '@mui/icons-material/Public';
import { translateAtt } from '@/utils/translated';


export default function CharacterCard(props: Character) {
  const [liked, setLiked] = useState(props.liked);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLikeClick = () => {
    setLiked(!liked);

  };

  return (
    <Fragment>
      <Card sx={{
        p: 1,
        backgroundColor: props.id === 1 || props.id === 2 ? "#ba8d32" : "white",
        cursor: "pointer"
      }}
        onClick={!isFlipped ? undefined : handleFlip}
      >

        <Card sx={{
          minHeight: '380px',
          width: "100%",
          flex: 1,
          borderColor: "transparent",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',

        }}
          onClick={handleFlip}

        >

          <CardContent key={!isFlipped ? 1 : 2} sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}>

            <CardCover>
              <img
                src={props.image}
                loading="lazy"
                alt={`${props.id} - Foto do personagem ${props.name}`}
                width={150}
                height={50}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
              }}
            />

            <CardContent sx={{
              top: 15, right: 15,
              position: "absolute",
            }}>
              <Chip
                variant="soft"

                color={
                  props.status === "Alive" ? "success" : props.status === "Dead" ? "danger" : "neutral"
                }
                endDecorator={
                  props.status === "Alive" ? <MoodIcon /> : props.status === "Dead" ? <SentimentVeryDissatisfiedIcon /> : <SentimentNeutralIcon />
                }
              >
                {translateAtt(props.status)}
              </Chip>
            </CardContent>


            <CardContent sx={{ justifyContent: 'flex-end', gap: 1, m: 3 }}>
              <Box flexDirection={"row"} display={"flex"} gap={1}>
                <Typography level="h2" fontSize="lg" textColor="#fff" mr={2}>
                  {props.name}
                </Typography>
                <Chip variant="soft" sx={{ width: "auto", height: "100%" }} startDecorator={<AccessibilityNewRoundedIcon />}>
                  {translateAtt(props.species)}
                </Chip>
              </Box>
              <Typography
                startDecorator={<LocationOnRoundedIcon />}
                textColor="neutral.300"
              >
                {translateAtt(props.location.name)}
              </Typography>
              <Typography
                startDecorator={<PublicIcon />}
                textColor="neutral.300"
              >
                {translateAtt(props.origin.name)}
              </Typography>
            </CardContent>
          </CardContent>
          <CharacterCardVerse
            key={isFlipped ? 1 : 2}
            card={props}
            flip={handleFlip}
          />
        </Card>

        <CardActions sx={{
          bottom: 15,
          right: 15,
          borderRadius: '50%',
          position: "absolute",
        }}>
          <IconButton
            aria-label='btn-like'
            onClick={handleLikeClick}
            sx={{
              borderRadius: '50%',
              backgroundColor:"#FFF"
            }}
          >
            <Favorite color={liked ? 'error' : 'action'} />
          </IconButton>
        </CardActions>
      </Card>
    </Fragment>
  );
}
