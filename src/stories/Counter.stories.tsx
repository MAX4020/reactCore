import { bgContrast, bgDanger, bgDisabled, bgInfo, bgPrimary, bgSecondary, bgSuccess, bgWarning, textContrast, textPrimary, textSecondary } from '../Style/Style';
import '../index.css';
import Counter from "../ui/Counter";
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta
type Story = StoryObj<typeof Counter>;

export const CounterDefaul:Story={
  args:{
    className:"",
    direction: "col",
    typeIcon: "arrow",
    type: "primary",
    name: "name",
    value: 0,
    setValue: ()=>{},
    step: 1,
    min: -10,
    max: 10,
  }
}

export const CounterColorfull:Story={
  render:()=>{
    return(
      <>
      <div className='p-8 flex justify-around'>
        <Counter className={bgPrimary} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='arrow' value={0} type='primary'/>
        <Counter className={bgSecondary} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='sign' value={0} type='secondary'/>
        <Counter className={bgSuccess} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='angel' value={0} type='success'/>
        <Counter className={bgInfo} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='circleArrow' value={0} type='info'/>
        <Counter className={bgWarning} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='arrow' value={0} type='warning'/>
        <Counter className={bgDanger} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='sign' value={0} type='danger'/>
        <Counter className={`${bgContrast} ${textContrast}`} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='angel' value={0} type='contrast'/>
        <Counter className={bgDisabled} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='circleArrow' value={0} type='disabled'/>
      </div>
      <div className='p-8 flex justify-around bg-stone-900 dark'>
        <Counter className={bgPrimary} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='arrow' value={0} type='primary'/>
        <Counter className={bgSecondary} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='sign' value={0} type='secondary'/>
        <Counter className={bgSuccess} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='angel' value={0} type='success'/>
        <Counter className={bgInfo} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='circleArrow' value={0} type='info'/>
        <Counter className={bgWarning} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='arrow' value={0} type='warning'/>
        <Counter className={bgDanger} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='sign' value={0} type='danger'/>
        <Counter className={`${bgContrast} ${textContrast}`} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='angel' value={0} type='contrast'/>
        <Counter className={bgDisabled} name="vs" min={-10} max={10} step={1} setValue={()=>{}} typeIcon='circleArrow' value={0} type='disabled'/>
      </div>
      </>
    )
  }
}

export const ReadmeCounter:Story={
  render:()=>{
    return(
      <>
      <p className='text-3xl'>Компонент "Counter" представляет собой счётчик
      <ul>
        <li>Входящие в него аргументы:</li>
        <li>1. type - стиль счётчика</li>
        <li>2. direction - 2 стиля расположения кнопок</li>
        <ul className='ml-10'>
          <li>--col</li>
          <li>--row</li>
        </ul>
        <li>3. value - значение счётчика</li>
        <li>4. setValue - функция установки значения в счётчике</li>
        <li>5. min/max - интервал счётчика</li>
        <li>6. step - шаг счётчика</li>
      </ul>
      </p>
      </>
    )
  }
}