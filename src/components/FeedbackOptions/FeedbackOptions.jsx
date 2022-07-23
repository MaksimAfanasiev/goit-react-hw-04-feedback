import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.btnList}>
            {options.map((option, idx) => (
                <li key={idx} className={css.btnList_item}>
                    <button className={css.btnList_item__button} onClick={() => { onLeaveFeedback(option) }}>{option}</button>
                </li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}