import React from 'react';
import VideoListEntry from '../VideoListEntry';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fakeData } from './fakeData';
configure({ adapter: new Adapter() });

describe('VideoListEntry', () => {
  let cuteCatVideo, superCuteCatVideo, codeStatesVideo;

  beforeEach(() => {
    cuteCatVideo = shallow(<VideoListEntry video={fakeData[0]} />);
    superCuteCatVideo = shallow(<VideoListEntry video={fakeData[1]} />);
    codeStatesVideo = shallow(<VideoListEntry video={fakeData[2]} />);
  })

  test('should be a stateless functional component', () => {
    expect(React.Component.isPrototypeOf(VideoListEntry)).toBeFalsy();
  });

  test('should dynamically render a video\'s image', () => {
    const selector = '.media-object';
    expect(cuteCatVideo.find(selector).props().src).toBe('https://i.redd.it/oa78q1ng7lc01.jpg');
    expect(superCuteCatVideo.find(selector).props().src).toBe('https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg');
    expect(codeStatesVideo.find(selector).props().src).toBe('https://cdn-images-1.medium.com/max/1600/1*udhgH25bIWU1AQeYvwVKCQ.jpeg');
  });

  test('should dynamically render a video\'s title', () => {
    const selector = '.video-list-entry-title';
    expect(cuteCatVideo.find(selector).text()).toBe('Cute cat video');
    expect(superCuteCatVideo.find(selector).text()).toBe('Super cute cat video');
    expect(codeStatesVideo.find(selector).text()).toBe('Code States opens extension school on Mars');
  });

  test('should dynamically render a video\'s description', () => {
    const selector = '.video-list-entry-detail';
    expect(cuteCatVideo.find(selector).text()).toBe('The best cat video on the internet!');
    expect(superCuteCatVideo.find(selector).text()).toBe('Better than the best cat video on the internet!');
    expect(codeStatesVideo.find(selector).text()).toBe('Watch the ribbon cutting of the first coding bootcamp in space');
  });
});
