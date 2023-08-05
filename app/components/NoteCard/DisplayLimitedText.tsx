const DisplayLimitedText = ({ text, maxlen }: any) => {
    const limitText = text?.length > maxlen ? text.slice(0, maxlen) + '...' : text;
    return (
        limitText
    )
}

export default DisplayLimitedText