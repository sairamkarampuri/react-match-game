import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActivetab} = props
  const {tabId, displayText} = tabDetails
  const onChangeTab = () => {
    changeTab(tabId)
  }

  const activeClassName = isActivetab ? 'active' : ''

  return (
    <li className="list-tab-item">
      <button type="button" className="button" onClick={onChangeTab}>
        <p className={`tab-item ${activeClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
