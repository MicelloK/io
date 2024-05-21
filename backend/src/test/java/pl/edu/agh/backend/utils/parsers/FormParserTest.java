package pl.edu.agh.backend.utils.parsers;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Test;
import pl.edu.agh.backend.models.Form;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FormParserTest {
    private static final String VALID_JSON = "{\"longQuestionFields\":[\"longQuestion1\",\"longQuestion2\"],\"shortQuestionFields\":[\"shortQuestion1\",\"shortQuestion2\"],\"multiSelectionFields\":[{\"options\":[\"option1\",\"option2\", \"options3\"]},{\"options\":[\"option4\",\"option5\"]}],\"singleSelectionFields\":[{\"options\":[\"option5\",\"option6\"]},{\"options\":[\"option7\",\"option8\"]}],\"radioButtonFields\":[\"radioButton1\",\"radioButton2\"],\"checkboxFields\":[\"checkbox1\",\"checkbox2\"]}";


    @Test
    void shouldParseForm() throws JsonProcessingException {
        // given
        int longQuestionsExpectedSize = 2;
        int shortQuestionsExpectedSize = 2;
        int multiSelectionsExpectedSize = 2;
        int singleSelectionsExpectedSize = 2;
        int radioButtonsExpectedSize = 2;
        int checkboxesExpectedSize = 2;

        int firstMultiSelectionOptionsSize = 3;
        int secondMultiSelectionOptionsSize = 2;
        int firstSingleSelectionOptionsSize = 2;
        int secondSingleSelectionOptionsSize = 2;

        // when
        Form result = FormParser.parse(VALID_JSON);
        // then
        assertEquals(longQuestionsExpectedSize, result.longQuestions().size());
        assertEquals(shortQuestionsExpectedSize, result.shortQuestions().size());
        assertEquals(multiSelectionsExpectedSize, result.multiSelections().size());
        assertEquals(singleSelectionsExpectedSize, result.singleSelections().size());
        assertEquals(radioButtonsExpectedSize, result.radioButtons().size());
        assertEquals(checkboxesExpectedSize, result.checkboxes().size());

        assertEquals(firstMultiSelectionOptionsSize, result.multiSelections().get(0).size());
        assertEquals(secondMultiSelectionOptionsSize, result.multiSelections().get(1).size());
        assertEquals(firstSingleSelectionOptionsSize, result.singleSelections().get(0).size());
        assertEquals(secondSingleSelectionOptionsSize, result.singleSelections().get(1).size());

    }
}