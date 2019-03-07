import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import ButtonWithTooltip from '../../Ui/ButtonWithTooltip'

export default class ButtonsBar extends Component {
  static propTypes = {
    revertAll: PropTypes.func,
    collapseAll: PropTypes.func,
    doSave: PropTypes.func
  }

  render() {
    const { hasChanges, revertAll, collapseAll, doPromptContribute } = this.props
    return (
      <div className="text-right">
        <ButtonWithTooltip tip="Revert all changes of all the definitions">
          <Button bsStyle="danger" disabled={hasChanges} onClick={revertAll}>
            <i className="fas fa-undo" />
            <span>&nbsp;Revert Changes</span>
          </Button>
        </ButtonWithTooltip>
        <Button bsStyle="default" disabled={hasChanges} onClick={collapseAll}>
          Collapse All
        </Button>
        <Button bsStyle="success" disabled={hasChanges} onClick={doPromptContribute}>
          Contribute
        </Button>
      </div>
    )
  }
}
