import React from 'react';
import VideoList from '../VideoList';
import VideoListEntry from '../VideoListEntry';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fakeData } from './fakeData';
configure({ adapter: new Adapter() });

describe('VideoList', () => {
  test('should be a stateless functional component', () => {
    expect(React.Component.isPrototypeOf(VideoList)).toBeFalsy();
  });

  test('should render one `VideoListEntry` when given one video', () => {
    const wrap = shallow(
      <VideoList videos={fakeData.slice(-1)} />
    );
    expect(wrap.exists()).toBeTruthy();
    expect(wrap.props().children.length).toBe(1);
    expect(wrap.children().everyWhere(child => child.name() === 'VideoListEntry')).toBeTruthy();
  });

  test('should render three `VideoListEntry` when given three videos', function() {
    const wrap = shallow(
      <VideoList videos={fakeData.slice(-3)} />
    );
    expect(wrap.exists()).toBeTruthy();
    expect(wrap.props().children.length).toBe(3);
    expect(wrap.children().everyWhere(child => child.name() === 'VideoListEntry')).toBeTruthy();
  });

  test('should render five `VideoListEntry` when given five videos', function() {
    const wrap = shallow(
      <VideoList videos={fakeData.slice(-5)} />
    );
    expect(wrap.exists()).toBeTruthy();
    expect(wrap.props().children.length).toBe(5);
    expect(wrap.children().everyWhere(child => child.name() === 'VideoListEntry')).toBeTruthy();
  });
})