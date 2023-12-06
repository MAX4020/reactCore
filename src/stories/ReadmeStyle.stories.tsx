import '../index.css';
import Header from "../ui/Header";
import {Meta, StoryObj} from "@storybook/react"
import classNames from 'classnames';
import { bgContrast, bgDanger, bgDisabled, bgInfo, bgPrimary, bgSecondary, bgSuccess, bgWarning, borderContrast, borderDanger, borderDisabled, borderInfo, borderPrimary, borderSecondary, borderSuccess, borderWarning, textContrast, textDanger, textDisabled, textInfo, textPrimary, textSecondary, textSuccess, textWarning } from '../Style/Style';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const StyleDefault:Story = {
  render:()=>{
    return(
      <div className='text-2xl'>
      <Header>Общие стили</Header>
        <div className='flex'>
          <ul>
            <li>1. Primary</li>
            <li>2. Secondary</li>
            <li>3. Success</li>
            <li>4. Info</li>
            <li>5. Warning</li>
            <li>6. Danger</li>
            <li>7. Contrast</li>
            <li>8. Disabled</li> 
          </ul>
          <ul className='ml-5'>
            <li>Эти стили распространяются на:</li>
            <li>bg - задник</li>
            <li>text - текст</li>
            <li>border - рамка</li>
            <li>Примеры :bgPrimary, textSuccess, borderInfo</li>
          </ul>
          <ul>
            <li>Так же есть тёмная версия цветов "dark:"</li>
          </ul>
          <div className='flex flex-col items-center ml-20'>
            <p className={classNames(textPrimary)}>Light</p>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgPrimary,textPrimary,borderPrimary)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgSecondary,textSecondary,borderSecondary)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgSuccess,textSuccess,borderSuccess)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgInfo,textInfo,borderInfo)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgWarning,textWarning,borderWarning)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgDanger,textDanger,borderDanger)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgContrast,textContrast,borderContrast)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgDisabled,textDisabled,borderDisabled)}>HI</div>
          </div>
          <div className='flex flex-col ml-10 dark items-center h-full bg-stone-900'>
            <p className={classNames(textPrimary)}>Dark</p>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgPrimary,textPrimary,borderPrimary)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgSecondary,textSecondary,borderSecondary)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgSuccess,textSuccess,borderSuccess)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgInfo,textInfo,borderInfo)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgWarning,textWarning,borderWarning)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgDanger,textDanger,borderDanger)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgContrast,textContrast,borderContrast)}>HI</div>
            <div className={classNames('w-10 h-10 flex items-center justify-center border-2',bgDisabled,textDisabled,borderDisabled)}>HI</div>
          </div>
        </div>
        <Header>Общие аргументы</Header>
        <div className='flex'>
          <ul>
            <li>1.type
              <ul className='ml-5'>
                <li>--primary</li>
                <li>--secondary</li>
                <li>--success</li>
                <li>--info</li>
                <li>--warning</li>
                <li>--danger</li>
                <li>--contrast</li>
                <li>--disabled</li>
              </ul>
            </li>
          </ul>
          <ul className='ml-5'>
            <li>2. children
              <ul className='ml-5'>
                <li>--Принимает в себя содержимое</li>
              </ul>
            </li>
          </ul>
          <ul className='ml-5'>
            <li>3.content/value
              <ul>
                <li className='ml-5'>--Принимает значение</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}