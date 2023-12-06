import '../index.css';
import {Select} from "../ui/Select";
import {Meta, StoryObj} from "@storybook/react"
import {Fa42Group,Fa500Px,FaAccessibleIcon,FaAngular,FaAws,FaBluetooth,FaCcJcb,FaCentercode,FaConfluence} from "react-icons/fa6"

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const itemsOptions = [
  {value:1,title:<><Fa42Group/>Hello world</>},
  {value:2,title:<><Fa500Px/>Hello</>},
  {value:3,title:<><FaAccessibleIcon/>HI</>}
  ]
const iconsOptions = [
  {value:1,title:<><FaAngular/><FaAws/></>},
  {value:2,title:<><FaBluetooth/><FaCcJcb/></>},
  {value:3,title:<><FaCentercode/><FaConfluence/></>}
]
const imagesOptions = [
  {value:1,title:<><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTdtFY2MkF-g2DL99kH7h6NLDIs1a-t0_QQ&usqp=CAU" alt="" /></>},
  {value:2,title:<><img src="https://img02.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/9/c8/9c8dbd93078c4276a741b47c3fe1502b.jpg" alt="" /></>},
  {value:3,title:<><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTdtFY2MkF-g2DL99kH7h6NLDIs1a-t0_QQ&usqp=CAU" alt="" /></>}
]

export const SelectDefaul:Story={
  args:{
    type: "primary",
    name: "vs",
    align: "center",
    options: [
      {value:1,title:<><Fa42Group/>Hello world</>},
      {value:2,title:<><Fa500Px/>Hello</>},
      {value:3,title:<><FaAccessibleIcon/>HI</>}
    ]
  }
}
export const SelectItemsCollorfull:Story={
  render: () => {
  return(
    <>
      <div className='p-8 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'disabled'}></Select>
      </div>
      <div className='p-8 dark bg-stone-900 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={itemsOptions} type={'disabled'}></Select>
      </div>
    </>
    )
  }
}
export const SelectIconsCollorfull:Story={
  render: () => {
  return(
    <>
      <div className='p-8 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'disabled'}></Select>
      </div>
      <div className='p-8 dark bg-stone-900 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={iconsOptions} type={'disabled'}></Select>
      </div>
    </>
    )
  }
}
export const SelectImagesCollorfull:Story={
  render: () => {
  return(
    <>
      <div className='p-8 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'disabled'}></Select>
      </div>
      <div className='p-8 dark bg-stone-900 flex justify-around'>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'primary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'secondary'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'success'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'info'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'warning'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'danger'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'contrast'}></Select>
        <Select name={"vs"} value={1} setValue={()=>{}} options={imagesOptions} type={'disabled'}></Select>
      </div>
    </>
    )
  }
}
export const ReadmeSelect:Story={
  render:()=>{
    return(
      <>
      <div className='text-2xl'>
        <ul>
          <li>Компонент "Select" - это меня выбора</li>
          <li>Аргументы у "Select":</li>
          <ul className='ml-5'>
            <li>1. type - стиль</li>
            <li>2. typeAlign - стиль отцентровки
              <ul className='ml-5'>
                <li>--start</li>
                <li>--center</li>
                <li>--end</li>
              </ul>
            </li>
            <li>3. name - имя</li>
            <li>4. value - номер опции</li>
            <li>5. title - название опции</li>
            <li>6. options - опции селекта в которых находится содержимое</li>
          </ul>
        </ul>
      </div>
      </>
    )
  }
}