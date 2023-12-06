import '../index.css';
import { Button } from '../ui/Button';
import Scroll from "./../ui/Scroll"
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Scroll> = {
  component: Scroll,
};

export default meta;

type Story = StoryObj<typeof Scroll>;

export const ScrollDefault:Story={
  args:{
    children: 1,
    className: "",
  }
} 

export const ScrollExample:Story={
  render: () =>{
    return(
      <>
      <Scroll className="h-[500px]">
      <div className="flex flex-col p-5">
        <Button className="m-2">1HELLO WORLD</Button>
        <Button className="m-2">2HELLO WORLD</Button>
        <Button className="m-2">3HELLO WORLD</Button>
        <Button className="m-2">4HELLO WORLD</Button>
        <Button className="m-2">5HELLO WORLD</Button>
        <Button className="m-2">6HELLO WORLD</Button>
        <Button className="m-2">7HELLO WORLD</Button>
        <Button className="m-2">8HELLO WORLD</Button>
        <Button className="m-2">9HELLO WORLD</Button>
        <Button className="m-2">10HELLO WORLD</Button>
        <Button className="m-2">11HELLO WORLD</Button>
        <Button className="m-2">12HELLO WORLD</Button>
        <Button className="m-2">13HELLO WORLD</Button>
        <Button className="m-2">14HELLO WORLD</Button>
        <Button className="m-2">15HELLO WORLD</Button>
        <Button className="m-2">16HELLO WORLD</Button>
        <Button className="m-2">17HELLO WORLD</Button>
        <Button className="m-2">18HELLO WORLD</Button>
        <Button className="m-2">19HELLO WORLD</Button>
        <Button className="m-2">20HELLO WORLD</Button>
        </div>
      </Scroll>
      </>
    )
  }
}