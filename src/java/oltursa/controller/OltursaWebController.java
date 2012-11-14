package oltursa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class OltursaWebController {

    @RequestMapping(params = "accion=showRegistroConsumoCombustible")
    public ModelAndView showRegistroConsumoCombustible() {
        return new ModelAndView("JSPRegistroConsumoCombustible");
    }
}
