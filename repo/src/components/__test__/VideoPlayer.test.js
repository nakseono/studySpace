import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fakeData } from './fakeData';
configure({ adapter: new Adapter() });

describe('VideoPlayer', () => {
  let cuteCatVideo, superCuteCatVideo, codeStatesVideo;

  beforeEach(() => {
    cuteCatVideo = shallow(<VideoPlayer video={fakeData[0]} />);
    superCuteCatVideo = shallow(<VideoPlayer video={fakeData[1]} />);
    codeStatesVideo = shallow(<VideoPlayer video={fakeData[2]} />);
  })

  test('should be a stateless functional component', () => {
    expect(React.Component.isPrototypeOf(VideoPlayer)).toBeFalsy();
  });

  test('should dynamically render a video\'s image', () => {
    const selector = '.embed-responsive-item';
    expect(cuteCatVideo.find(selector).props().src).toBe('https://www.youtube.com/embed/000001');
    expect(superCuteCatVideo.find(selector).props().src).toBe('https://www.youtube.com/embed/000002');
    expect(codeStatesVideo.find(selector).props().src).toBe('https://www.youtube.com/embed/000003');
  });

  test('should dynamically render a video\'s title', () => {
    const selector = '.video-player-details h3';
    expect(cuteCatVideo.find(selector).text()).toBe('Cute cat video');
    expect(superCuteCatVideo.find(selector).text()).toBe('Super cute cat video');
    expect(codeStatesVideo.find(selector).text()).toBe('Code States opens extension school on Mars');
  });

  test('should dynamically render a video\'s description', () => {
    const selector = '.video-player-details > div';
    expect(cuteCatVideo.find(selector).text()).toBe('The best cat video on the internet!');
    expect(superCuteCatVideo.find(selector).text()).toBe('Better than the best cat video on the internet!');
    expect(codeStatesVideo.find(selector).text()).toBe('Watch the ribbon cutting of the first coding bootcamp in space');
  });
});
