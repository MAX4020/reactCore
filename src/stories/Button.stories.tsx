import '../index.css';
import { Button } from "../ui/Button";
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonDefaul:Story={
  args:{
    type: "primary",
    children:"Hello world"
  }
}
export const ButtonColorfull:Story={
  render: () => {
    return (
      <>
        <div className='p-8 flex justify-around'>
          <Button type={"primary"}>Primary</Button>
          <Button type={"secondary"}>Secondary</Button>
          <Button type={"success"}>Success</Button>
          <Button type={"info"}>Info</Button>
          <Button type={"warning"}>Warning</Button>
          <Button type={"danger"}>Danger</Button>
          <Button type={"contrast"}>Contrast</Button>
          <Button type={"disabled"}>Disabled</Button>
        </div>
        <div className='p-8 flex justify-around dark bg-stone-900 text-white'>
          <Button type={"primary"}>Primary</Button>
          <Button type={"secondary"}>Secondary</Button>
          <Button type={"success"}>Success</Button>
          <Button type={"info"}>Info</Button>
          <Button type={"warning"}>Warning</Button>
          <Button type={"danger"}>Danger</Button>
          <Button type={"contrast"}>Contrast</Button>
          <Button type={"disabled"}>Disabled</Button>
        </div>
      </>
      )
  }
}
  export const ReadmeButton:Story = {
    render: () =>{
      return(
        <>
        <p className='text-3xl'>Компонент "Button" - это кнопка, имеющая следующие аргументы:
        <ul>
          <li>1. Все стандартные аргументы</li>
          <li>2. type - стиль кнопки</li>
          <li>3. children - содержимое кнопки</li>
        </ul>
        </p>
        </>
      )
    }
  }