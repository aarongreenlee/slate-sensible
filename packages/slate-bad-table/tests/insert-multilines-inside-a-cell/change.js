/** @jsx h */
import h from '../h';

const fragment = (
    <value>
        <document>
            <paragraph>Cat is cute</paragraph>
            <paragraph>Cat is very cute</paragraph>
            <paragraph>Cat is really cute</paragraph>
        </document>
    </value>
)
    .change()
    .normalize().value.document;

export function runChange(plugin, change) {
    plugin.changes.insertFragmentAtRange(
        change,
        change.value.selection,
        fragment
    );
    return change.normalize();
}

export const input = (
    <value>
        <document>
            <table>
                <tr>
                    <td>Input Table 1: Col 0, Row0</td>
                    <td>Input Table 1: Col 1, Row0</td>
                    <td>Input Table 1: Col 2, Row0</td>
                </tr>
                <tr>
                    <td>
                        Input Table 1:<anchor /> Col 0, Row1
                    </td>
                    <td>
                        Input Table 1:<focus />Col 1, Row1
                    </td>
                    <td>Input Table 1: Col 2, Row1</td>
                </tr>
                <tr>
                    <td>Input Table 1: Col 0, Row2</td>
                    <td>Input Table 1: Col 1, Row2</td>
                    <td>Input Table 1: Col 2, Row2</td>
                </tr>
            </table>
        </document>
    </value>
);
export const output = (
    <value>
        <document>
            <table>
                <tr>
                    <td>Input Table 1: Col 0, Row0</td>
                    <td>Input Table 1: Col 1, Row0</td>
                    <td>Input Table 1: Col 2, Row0</td>
                </tr>
                <tr>
                    <td>
                        Input Table 1:Cat is cute
                        {'\n'}
                        Cat is very cute
                        {'\n'}
                        Cat is really cute<cursor />
                    </td>
                    <td>Col 1, Row1</td>
                    <td>Input Table 1: Col 2, Row1</td>
                </tr>
                <tr>
                    <td>Input Table 1: Col 0, Row2</td>
                    <td>Input Table 1: Col 1, Row2</td>
                    <td>Input Table 1: Col 2, Row2</td>
                </tr>
            </table>
        </document>
    </value>
);
