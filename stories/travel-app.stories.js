import { html } from 'lit-html';
import '../src/travel-app.js';

export default {
  title: 'TravelApp',
  component: 'travel-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <travel-app
      style="--travel-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </travel-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
