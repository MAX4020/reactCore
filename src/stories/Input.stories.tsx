import '../index.css';
import { Input, InputNumber} from "../ui/Input";
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta
type Story = StoryObj<typeof Input>;

export const InputDefaul:Story={
  args:{
    type: "primary",
    name: "name",
    content: "Hello world"
  }
}
export const InputColorfull:Story={
  render: () => {
    return (
    <>
      <div className='p-8 flex justify-around'>
        <Input name="vs" type={"primary"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"secondary"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"success"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"info"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"warning"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"danger"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"contrast"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"disabled"} onChange={()=>{}} content='Hello world'/>
      </div>
      <div className='p-8 dark bg-stone-900 flex justify-around'>
        <Input name="vs" type={"primary"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"secondary"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"success"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"info"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"warning"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"danger"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"contrast"} onChange={()=>{}} content='Hello world'/>
        <Input name="vs" type={"disabled"} onChange={()=>{}} content='Hello world'/>
      </div>
    </>
  )}
}
  export const InputNumberDefaul:Story={
    args:{
      type: "primary",
      name: "name",
      content: "403242",
    }
  }
  export const InputNumberColorfull:Story={
    render: () => {
      return (
      <> 
        <div className='p-8 flex justify-around'>
          <InputNumber name="vs" type={"primary"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"secondary"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"success"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"info"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"warning"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"danger"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"contrast"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"disabled"} onChange={()=>{}}/>
        </div>
        <div className='p-8 dark bg-stone-900 flex justify-around'>
          <InputNumber name="vs" type={"primary"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"secondary"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"success"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"info"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"warning"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"danger"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"contrast"} onChange={()=>{}}/>
          <InputNumber name="vs" type={"disabled"} onChange={()=>{}}/>
        </div>
      </>
    )}
  }
  export const ReadmeInput:Story={
    render:()=>{
      return(
        <div className='text-2xl flex'>
          <ul>
            <li>Есть 2 инпута:</li>
            <li>1. Input - текстовый</li>
            <li>2. InputNumber - числовой</li>
          </ul>
          <ul className='ml-10'>
            <li>Аргументы Input:</li>
            <li>1. Все стандартные аргументы</li>
            <li>2. type - стиль</li>
            <li>3. name - имя</li>
            <li>4. content - содержимое</li>
          </ul>
        </div>
      )
    }
  }