import { Buttons } from './component/ui/Buttons';
import { Result } from './component/ui/Result';
import { GridCalculator } from './component/wrapper/GridCalculator';
import data from './data/data.json';
function App() {
  const {theme,mediumOperations,basicOperations}=data;
  const {basicOperationsColor,buttonsColor,primaryColor,dark,light}=theme;
  const auxNumbers=[1,2,3,4,5,6,7,8,9,0,'.'];
  return (
    <GridCalculator
      background={primaryColor}
    >
        <Result
          color={light}
        />
        {basicOperations.map((button,index)=>(
          <Buttons
            key={index}
            value={button.uiValue}
            background={basicOperationsColor}
            color={light}
            type='basic'
            area={(index+2)+' / 4 / span 1 / span 1'}
          />
        ))}
         {mediumOperations.map((button,index)=>(
          <Buttons
            key={index}
            value={button.uiValue}
            background={buttonsColor}
            color={dark}
            type='medium'
            area={'2 /' + (index+1) +'/ span 1 / span 1'}
          />
        ))}
        {
          auxNumbers.map((num,index)=>(
            <Buttons
            key={index}
            value={num}
            background={buttonsColor}
            color={dark}
            type='medium'
            area={(num==0 ? 'auto / auto / auto / span 2' : 'auto')}
          />
          ))
        }
    </GridCalculator>
  );
}

export default App;
