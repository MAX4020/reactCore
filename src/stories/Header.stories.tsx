import '../index.css';
import Header from "../ui/Header";
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderDefaul:Story={
  args:{
    children: <div className='flex items-center justify-centers'>HELLO WORLD</div>
  }
}
export const ReadmeHeader:Story={
  render:() =>{
    return(
      <><p className='text-3xl'>Компонент "Header" - заголок принимающий в себя "children"</p></>
    )
  }
}
