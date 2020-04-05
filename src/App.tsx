import * as React from 'react';
import './styles.css';
import {BaseAbility, AbilityType} from './abilities/models';
import AbilityButton from './ui/common/ability-button';

export default function App() {
  return (
    <div className="App">
      <ControlPanel>
        <NewAbilityBtn />
      </ControlPanel>
    </div>
  );
}
