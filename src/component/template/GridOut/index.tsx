import GridLayout, { Layout } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Slider, Space } from 'antd';
import _ from 'lodash';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import SelectMenu from 'component/organisms/GridOut/SelectMenu';
const Gridout = (props: any) => {
  /**블럭들의 정렬방식을 라디오 버튼으로 변경하는 함수*/
  const handleSortBlock = (event: any) =>
    props.handleGridLayoutOptionRadio_onChange(event, 'compact-type');

  /**블럭 드래그 시 다른 블럭들이 움직일지를 라디오버튼으로 변경하는 함수*/
  const BlockMovement = (event: any) =>
    props.handleGridLayoutOptionRadio_onChange(event, 'prevent-collision');

  console.log('grid', props);
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <div className="flex items-center justify-around w-full h-full space-x-2 select-none">
      {/* 도구 영역 */}
      <div className="flex items-start justify-center h-full w-72">
        <div className="w-full space-y-3">
          {/* 블럭 추가 버튼 */}
          <div
            onClick={() => props.handleButton_onClick('add-block')}
            className="flex items-center justify-center py-3 space-x-2 truncate rounded-md button-event bg-white/10"
          >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={['fas', 'grid-2-plus']}
                className="text-gray-200 icon-size-4 icon-shadow"
              />
            </div>

            <span className="text-base font-semibold text-gray-200 truncate text-shadow-md">
              블럭 추가
            </span>
          </div>

          {/* 정렬 방식 라디오 버튼 */}
          <div className="py-2 space-y-2">
            <div className="flex items-center justify-start px-2 space-x-2">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-down-big-small']}
                  className="text-gray-200 icon-size-2 icon-shadow"
                />
              </div>

              <div className="flex items-center justify-center leading-none">
                <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                  블럭 정렬 방식
                </span>
              </div>
            </div>

            {/* 가로 분리선 */}
            <div className="w-full h-px border-b border-gray-600 border-solid"></div>

            <div className="px-2">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  defaultValue={props.gridLayoutOption.compactType}
                  onChange={handleSortBlock}
                  sx={{ color: 'white' }}
                >
                  <FormControlLabel
                    value="null"
                    control={<Radio />}
                    label="자유 배치"
                  />
                  <FormControlLabel
                    value="vertical"
                    control={<Radio />}
                    label="위쪽 정렬"
                  />
                  <FormControlLabel
                    value="horizontal"
                    control={<Radio />}
                    label="왼쪽 정렬"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* 블럭 드래그 시, 주변 블럭 밀기 라디오 버튼 */}
          <div className="py-2 space-y-2">
            <div className="flex items-center justify-start px-2 space-x-2">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={['fas', 'table-pivot']}
                  className="text-gray-200 icon-size-2 icon-shadow"
                />
              </div>

              <div className="flex items-center justify-center leading-none">
                <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                  블럭 드래그 시, 주변 블럭 밀기
                </span>
              </div>
            </div>

            {/* 가로 분리선 */}
            <div className="w-full h-px border-b border-gray-600 border-solid"></div>

            <div className="px-2">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  defaultValue={props.gridLayoutOption.preventCollision}
                  onChange={BlockMovement}
                  sx={{ color: 'white' }}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="블럭 고정"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="동적으로 반응"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* 블럭이 배치될 그리드 가로 격자 수 슬라이더 폼 */}
          <div className="py-2 space-y-2">
            <div className="flex items-center justify-start px-2 space-x-2">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrows-left-right']}
                  className="text-gray-200 icon-size-2 icon-shadow"
                />
              </div>

              <div className="flex items-center justify-center leading-none">
                <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                  작업 공간의 가로 격자 수
                </span>
              </div>
            </div>

            {/* 가로 분리선 */}
            <div className="w-full h-px border-b border-gray-600 border-solid"></div>

            <div className="flex items-center justify-center px-2 space-x-2">
              {/* 슬라이더 */}
              <Slider
                min={1}
                max={15}
                onChange={(event: any) =>
                  props.handleGridLayoutOptionSlider_onChange(event, 'cols')
                }
                value={props.gridLayoutOption.cols}
                disabled={false}
                className="w-full"
              />

              {/* 슬라이더의 현재 값 */}
              <div className="flex items-center justify-end w-9">
                <div className="w-6 py-0.5 flex justify-center items-center border border-solid border-gray-500 rounded-full">
                  <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                    {props.gridLayoutOption.cols}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 블럭이 배치될 그리드 세로 최대 격자 수 슬라이더 폼 */}
          <div className="py-2 space-y-2">
            <div className="flex items-center justify-start px-2 space-x-2">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrows-up-down']}
                  className="text-gray-200 icon-size-2 icon-shadow"
                />
              </div>

              <div className="flex items-center justify-center leading-none">
                <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                  작업 공간의 세로 최대 격자 수
                </span>
              </div>
            </div>

            {/* 가로 분리선 */}
            <div className="w-full h-px border-b border-gray-600 border-solid"></div>

            <div className="flex items-center justify-center px-2 space-x-2">
              {/* 슬라이더 */}
              <Slider
                min={1}
                max={15}
                onChange={(event: any) =>
                  props.handleGridLayoutOptionSlider_onChange(event, 'max-rows')
                }
                value={props.gridLayoutOption.maxRows}
                disabled={false}
                className="w-full"
              />

              {/* 슬라이더의 현재 값 */}
              <div className="flex items-center justify-end w-9">
                <div className="w-6 py-0.5 flex justify-center items-center border border-solid border-gray-500 rounded-full">
                  <span className="text-xs font-semibold text-gray-200 truncate text-shadow-md">
                    {props.gridLayoutOption.maxRows}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <SelectMenu />

          {/* 저장 버튼 */}
          <div
            onClick={() => props.handleButton_onClick('save-block')}
            className="flex items-center justify-center py-3 space-x-2 truncate rounded-md button-event bg-white/10"
          >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={['fas', 'save']}
                className="text-gray-200 icon-size-4 icon-shadow"
              />
            </div>

            <span className="text-base font-semibold text-gray-200 truncate text-shadow-md">
              저장
            </span>
          </div>
        </div>
      </div>

      {/* 편집 영역 */}
      <div
        ref={props.uiRef}
        className="relative flex-grow w-full h-full overflow-hidden rounded-md bg-slate-800"
      >
        <GridLayout
          className="layout"
          layout={props.gridLayout}
          cols={props.gridLayoutOption.cols}
          maxRows={props.gridLayoutOption.maxRows}
          // rowHeight={30}
          rowHeight={
            ((props.uiHeight || 1) -
              ((props.gridLayoutOption.maxRows || 1) - 1) * 10 -
              20) /
            (props.gridLayoutOption.maxRows || 1)
          }
          width={props.uiWidth || 1000}
          useCSSTransforms={true}
          compactType={props.gridLayoutOption.compactType}
          preventCollision={props.gridLayoutOption.preventCollision}
          onLayoutChange={(layout: Layout[]) => props.setGridLayout(layout)}
        >
          {props.gridLayout.map((data: any) => (
            <div
              key={data.i}
              className="relative flex items-center justify-center overflow-hidden bg-gray-200 rounded-sm shadow"
            >
              {props.getGridLayoutBlockComponent(data.i)}

              <Popover
                id="component-grid-layout"
                // title={
                //   <span className="text-sm font-semibold text-gray-700">
                //     {data.i}
                //   </span>
                // }
                content={
                  <div className="px-3 py-1">
                    {/* 컴포넌트 선택 */}
                    <div
                      onClick={() =>
                        props.handleButton_onClick(
                          'open-block-component',
                          data.i,
                        )
                      }
                      className="flex items-center justify-start h-8 space-x-2 button-event"
                    >
                      <div className="flex items-center justify-center w-4">
                        <FontAwesomeIcon
                          icon={['fas', 'badge-check']}
                          className="icon-size-3 text-lime-600"
                        />
                      </div>

                      <span className="text-sm font-semibold text-gray-600">
                        컴포넌트 선택
                      </span>
                    </div>

                    {/* 가로 분리선 */}
                    <div className="flex items-center justify-start space-x-2">
                      <div className="w-4" />
                      <div className="w-full h-px border-b border-gray-200 border-solid"></div>
                    </div>

                    {/* 블럭 삭제 */}
                    <div
                      onClick={() =>
                        props.handleButton_onClick('remove-block', data.i)
                      }
                      className="flex items-center justify-start h-8 space-x-2 button-event"
                    >
                      <div className="flex items-center justify-center w-4">
                        <FontAwesomeIcon
                          icon={['fas', 'xmark']}
                          className="icon-size-3 text-rose-600"
                        />
                      </div>

                      <span className="text-sm font-semibold text-gray-600">
                        블럭 삭제
                      </span>
                    </div>
                  </div>
                }
                trigger="click"
                visible={data.i === props.selectedGridLayoutBlock}
                onVisibleChange={(visible: boolean) =>
                  props.setSelectedGridLayoutBlock(visible ? data.i : '')
                }
                className="component-grid-layout"
              >
                <div
                  onClick={() => props.setSelectedGridLayoutBlock(data.i)}
                  className="absolute flex items-center justify-center button-event left-1 top-1"
                >
                  <FontAwesomeIcon
                    icon={['far', 'bars']}
                    className="text-gray-400 icon-size-2"
                  />
                </div>
              </Popover>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};
export default Gridout;
