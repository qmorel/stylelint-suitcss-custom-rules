import test from 'ava'
import path from 'path'
import stylelint from 'stylelint'

const input = `
  .component {
    color: white;
  }

  .Component-Header {
    display: flex;
  }

  .Component {
    height: 26px;

    &.isRed {
      color: red;
    }

    &.isRed-bold {
      font-weight: bold;
    }
  }
`

const expected = `
  .Component {
    color: white;
  }

  .Component-header {
    display: flex;
  }

  .Component {
    height: 26px;

    &.is-red {
      color: red;
    }

    &.is-redBold {
      font-weight: bold;
    }
  }
`

test('stylelint --fix', async t => {
  const data = await stylelint.lint({
    code: input,
    config: {
      extends: path.resolve('src', 'index.js')
    },
    fix: true
  })

  t.is(data.results[0]._postcssResult.root.toString(), expected)
})
