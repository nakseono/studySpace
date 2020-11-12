import React from 'react';
import App from '../App';
import VideoList from '../VideoList';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fakeData } from './fakeData';
import VideoPlayer from '../VideoPlayer';
configure({ adapter: new Adapter() });

describe('App', () => {
  let wrap;

  beforeEach(() => {
    wrap = mount(
      <App searchYouTube={() => {}} />
      );
    })

    test('should be a stateful functional component', () => {
      expect(React.Component.isPrototypeOf(App)).toBeTruthy();
    });

    test('should render a single VideoPlayer component', () => {
      expect(wrap.find(VideoPlayer).length).toBe(1);
    });

    test('should render a single VideoList component', () => {
      expect(wrap.find(VideoList).length).toBe(1);
    });

    test('should update the video player when a video entry\'s title is clicked', () => {
      wrap.setState({
        videos: fakeData,
        currentVideo: null
      }); // it works synchronously!

      const entryTitle = wrap.find('.video-list-entry-title').first();
      entryTitle.simulate('click');

      const playerTitle = wrap.find('.video-player-details h3');
      expect(playerTitle.text()).toBe(entryTitle.text());
    });
  });