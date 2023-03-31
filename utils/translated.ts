function translateAtt(text:
    "Dead" | "Alive" |
    'Female' | 'Male' |
    'Genderless' | 'unknown' |
    "Human" | "Alien" |
    "Animal" | "Humanoid" |
    "Mythological Creature" | "Robot" | string
): string {
    let getText = "";
    switch (text) {
        case "Alive":
            getText = "Vivo"
            break;
        case "Dead":
            getText = "Morto"
            break;
        case "Female":
            getText = "Feminino"
            break;
        case "Male":
            getText = "Masculino"
            break;
        case "Genderless":
            getText = "Indefinido"
            break;
        case "unknown":
            getText = "Desconhecido"
            break;
        case "Human":
            getText = "Humano"
            break;
        case "Humanoid":
            getText = "Humanoide"
            break;
        case "Robot":
            getText = "Robô"
            break;
        case "Mythological Creature":
            getText = "Criatura"
            break;
        default:
            getText = text
            break;
    }

    return getText;
}

export { translateAtt }