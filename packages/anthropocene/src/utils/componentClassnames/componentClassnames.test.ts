import { extractClassnames } from './componentClassnames'

import { mockComponentStyle } from '@utils/componentStyle/componentStyle.test'

describe('componentClassnames - extractClassnames', () => {

  it('should convert component style to classnames object', () => {
    expect(extractClassnames('Badge', mockComponentStyle)).toEqual([
      {
        '.badge': {
          fontSize: 'dfsdf',
          paddingBlock: 'glkndfg',
        },
      },
      {
        '.badge-uppercase': {
          fontSize: 'dfsdf',
          paddingInline: '32px',
        }
      }
    ])
  })
})

//   < div class="badge badge-fz badge-py__hover badge-uppercase" > </div>

//   .badge { }
//   .badge - fz {}
//   .badge - py__hover { }
//   .badge - pt__sm { }
//   .badge - uppercase { }

// <div class="badge badge-uppercase" > </div>

//   .badge {
//   font - size: var(--dfsdf);
//   padding - top: var(--fz__sm);
//   padding-bottom: var(--fz__sm);
//   }
//   .badge-uppercase { }