/** @jsx h */

import h from '../h';

export default function(plugin, change) {
    plugin.onKeyDown(
        {
            key: 'Tab',
            preventDefault() {},
            stopPropagation() {}
        },
        change
    );
    return change;
}

export const input = (
    <value>
        <document>
            <table presetAlign={['left', 'left', 'left']}>
                <tr>
                    <td textAlign="left">Col 0, Row 0</td>
                    <td textAlign="left">Col 1, Row 0</td>
                    <td textAlign="left">Col 2, Row 0</td>
                </tr>
                <tr>
                    <td textAlign="left">Col 0, Row 1</td>
                    <td textAlign="left">Col 1, Row 1</td>
                    <td textAlign="left">Col 2, Row 1</td>
                </tr>
                <tr>
                    <td textAlign="left">Col 0, Row 1</td>
                    <td textAlign="left">Col 1, Row 1</td>
                    <td textAlign="left">
                        <cursor />Col 2, Row 1
                    </td>
                </tr>
            </table>
        </document>
    </value>
);

export const expected = (
    <value>
        <document>
            <table presetAlign={['left', 'left', 'left']}>
                <tr>
                    <td textAlign="left">Col 0, Row 0</td>
                    <td textAlign="left">Col 1, Row 0</td>
                    <td textAlign="left">Col 2, Row 0</td>
                </tr>
                <tr>
                    <td textAlign="left">Col 0, Row 1</td>
                    <td textAlign="left">Col 1, Row 1</td>
                    <td textAlign="left">Col 2, Row 1</td>
                </tr>
                <tr>
                    <td textAlign="left">Col 0, Row 1</td>
                    <td textAlign="left">Col 1, Row 1</td>
                    <td textAlign="left">
                        <cursor />Col 2, Row 1
                    </td>
                </tr>
                <tr>
                    <td textAlign="left">
                        <cursor />
                    </td>
                    <td textAlign="left" />
                    <td textAlign="left" />
                </tr>
            </table>
        </document>
    </value>
);
