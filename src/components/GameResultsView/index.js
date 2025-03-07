import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImagContainer,
  ResultName,
  ResultText,
} from './styledComponents'

import './index.css'

const GameResultsView = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props
  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButtom"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {isShow && (
        <>
          <ResultImagContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImagContainer>
          <ResultImagContainer>
            <ResultName>OPPONENT</ResultName>
            //
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImagContainer>
          <ResultImagContainer>
            <ResultText>{text}</ResultText>
            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImagContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}
export default GameResultsView
